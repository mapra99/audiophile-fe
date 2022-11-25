#!/bin/sh

cat .env.example | while read line
do
  echo "export $line" >> ~/.bashrc
done
