import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import mysql from 'mysql'
import { config } from 'dotenv'
import favicon from 'serve-favicon'
import express from 'express'
import os from 'os'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export { bodyParser, mongoose, mysql, config, favicon, express, os, cors, fs, path, MiniCssExtractPlugin }