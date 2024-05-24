import os
import json
from typing import List, Dict
from codecs import open
file_path = "/opt/buildhome/repo/files"  # 文件搜索路径
json_path = "/opt/buildhome/repo/manage/files.json"  # json路径

data: List[dict] = []


def search_file():
    global data
    for i in os.listdir(file_path):
        data.append({"name": i, "link": f"/files/{i}"})

def save_json():
    with open(json_path,"w",encoding="utf-8") as f:
        f.write(json.dumps(data))

if __name__ == "__main__":
    search_file()
    save_json()
