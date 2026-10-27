import "dotenv/config";
import express from "express";
import PG from "pg";
import joi from "joi";

const app = express();
const port = process.env.PORT
const {pool} = PG;

const poll = new pool({
