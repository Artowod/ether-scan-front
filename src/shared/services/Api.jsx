import defaultHost from "./settings.json";
import axios from "axios";

const host = defaultHost["host"];

export const initializingApp = async () => {
  const response = await axios.get(`${host}etherium/initializing`);
  return response;
};

export const stop = async () => {
  await axios.get(`${host}etherium/stop`);
};

export const status = async () => {
  const status = await axios.get(`${host}etherium/status`);
  return status;
};

export const getTransactionsByRecipientAddr = async (recipientAddr) => {
  const response = await axios.get(
    `${host}transactions/recipient/${recipientAddr}`
  );
  return response;
};

export const getTransactionsBySenderAddr = async (senderAddr) => {
  const response = await axios.get(`${host}transactions/sender/${senderAddr}`);
  return response;
};

export const getTransactionsByBlockNum = async (blockNum) => {
  const response = await axios.get(`${host}transactions/block/${blockNum}`);
  return response;
};

export const getTransactionById = async (transactionId) => {
  const response = await axios.get(`${host}transactions/${transactionId}`);
  return response;
};

export const getRecentBlock = async (transactionId) => {
  const response = await axios.get(`${host}transactions/${transactionId}`);
  return response;
};
