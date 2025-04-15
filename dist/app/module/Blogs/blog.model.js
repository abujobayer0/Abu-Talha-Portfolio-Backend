"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
    author: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Admin',
    },
    content: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
}, { timestamps: true });
exports.Blog = (0, mongoose_1.model)('Blog', blogSchema);
