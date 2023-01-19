#!/bin/bash

sudo docker build . -t nusgang/tutorial-webapi:develop --platform linux/amd64
sudo docker push nusgang/tutorial-webapi:develop
