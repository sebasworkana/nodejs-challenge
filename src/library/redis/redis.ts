import Redis from 'ioredis';
import logger from '../logger/logger';

const redisClient = new Redis({
  port: parseInt(process.env.REDIS_PORT, 10) || 6379,
  host: process.env.REDIS_HOST || 'redis',
});

redisClient.on('error', err => logger.error('Redis Client Error', err));
redisClient.on('connect', function () {
  console.log('connected');
});

export default redisClient;
