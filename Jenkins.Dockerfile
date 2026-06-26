FROM jenkins/jenkins:lts

USER root

# Install Docker CLI, Git and Curl
RUN apt-get update && \
    apt-get install -y docker.io git curl && \
    apt-get clean

# Install Docker Compose
RUN curl -SL https://github.com/docker/compose/releases/latest/download/docker-compose-linux-x86_64 \
    -o /usr/local/bin/docker-compose && \
    chmod +x /usr/local/bin/docker-compose

# Add docker group with same GID as host Docker socket
ARG DOCKER_GID=1001

RUN groupadd -g ${DOCKER_GID} docker || true && \
    usermod -aG docker jenkins

USER jenkins