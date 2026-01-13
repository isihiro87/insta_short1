FROM mcr.microsoft.com/devcontainers/javascript-node:1-20

# Python 3.11をインストール
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    python3.11 \
    python3.11-dev \
    python3-pip \
    python3.11-venv \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/*

# Python 3.11をデフォルトのpythonとして設定
RUN update-alternatives --install /usr/bin/python python /usr/bin/python3.11 1 \
    && update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.11 1

# 作業ディレクトリを設定
WORKDIR /workspace

# ユーザーをnodeに変更（devcontainerのデフォルト）
USER node



