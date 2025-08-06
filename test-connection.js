import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const databaseURL = process.env.DATABASE_URL;

console.log("Testing MongoDB connection...");
console.log("Database URL:", databaseURL.replace(/\/\/.*:.*@/, '//***:***@')); // Hide credentials

const testConnection = async () => {
  try {
    console.log("Attempting to connect...");
    
    await mongoose.connect(databaseURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4,
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      socketTimeoutMS: 45000,
    });
    
    console.log("✅ Database connected successfully!");
    
    // Test a simple operation
    const admin = mongoose.connection.db.admin();
    const result = await admin.ping();
    console.log("✅ Ping successful:", result);
    
  } catch (error) {
    console.error("❌ Connection failed:");
    console.error("Error name:", error.name);
    console.error("Error message:", error.message);
    console.error("Error code:", error.code);
    
    if (error.reason) {
      console.error("Reason:", error.reason);
    }
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected");
    process.exit(0);
  }
};

testConnection();
