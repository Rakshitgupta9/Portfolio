const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

// MongoDB connection
const MONGODB_URI = 'mongodb+srv://rakshit:agewell@cluster0.svixdcm.mongodb.net/';
const DB_NAME = 'portfolio';
const COLLECTION_NAME = 'Visitors';

let db;

async function connectToMongoDB() {
    try {
        const client = new MongoClient(MONGODB_URI);
        await client.connect();
        db = client.db(DB_NAME);
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
}

// Initialize visitor count if collection is empty
async function initializeVisitorCount() {
    try {
        const collection = db.collection(COLLECTION_NAME);
        const count = await collection.countDocuments();

        if (count === 0) {
            await collection.insertOne({
                count: 0,
                lastUpdated: new Date()
            });
            console.log('Initialized visitor count to 0');
        }
    } catch (error) {
        console.error('Error initializing visitor count:', error);
    }
}

// API endpoint to get current visitor count
app.get('/api/visitors', async (req, res) => {
    try {
        const collection = db.collection(COLLECTION_NAME);
        const visitorData = await collection.findOne({});

        if (visitorData) {
            res.json({ count: visitorData.count });
        } else {
            res.json({ count: 0 });
        }
    } catch (error) {
        console.error('Error fetching visitor count:', error);
        res.status(500).json({ error: 'Failed to fetch visitor count' });
    }
});

// API endpoint to increment visitor count
app.post('/api/visitors/increment', async (req, res) => {
    try {
        const collection = db.collection(COLLECTION_NAME);

        // Use findOneAndUpdate with upsert to ensure document exists
        const result = await collection.findOneAndUpdate(
            {}, // empty filter to match any document
            {
                $inc: { count: 1 },
                $set: { lastUpdated: new Date() }
            },
            {
                upsert: true,
                returnDocument: 'after'
            }
        );

        res.json({
            count: result.count,
            message: 'Visitor count incremented successfully'
        });
    } catch (error) {
        console.error('Error incrementing visitor count:', error);
        res.status(500).json({ error: 'Failed to increment visitor count' });
    }
});

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    await connectToMongoDB();
    await initializeVisitorCount();
});

console.log('Server starting...');
