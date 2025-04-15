"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.About = void 0;
const mongoose_1 = require("mongoose");
const aboutSchema = new mongoose_1.Schema({
    me: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Admin' },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, default: '' },
    country: { type: String, required: true },
    address: { type: String, required: true },
    district: { type: String, required: true },
}, { timestamps: true });
exports.About = (0, mongoose_1.model)('About', aboutSchema);
