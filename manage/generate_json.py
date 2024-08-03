import os
import json
from typing import List, Dict
from codecs import open
import zipfile


search_file_path = "./files"  # 文件搜索路径
file_path = "./manage/files.json"  # json路径
friend_json = "./manage/friend.json"
data: List[dict] = []

friend_link: List[dict] = [
    {
        "name": "Exminecraft158的个人主页",
        "link": ["https://ex.rth10.com/me/", "https://exec.mysxl.cn/", "https://ex-my-blog.mysxl.cn/", "https://exside6.netlify.app/"]
    },
]


def search_file() -> None:
    global data
    for i in os.listdir(search_file_path):
        data.append({"name": i, "link": f"/files/{i}"})


def search_link() -> None:
    global data
    for each in friend_link:
        data.append({
            "name": each["name"],
            "link": each["link"],
        })
def save_files():
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(json.dumps(data))


def save_friend() ->None:
    with open(friend_json, "w", encoding="utf-8") as f:
        f.write(json.dumps(data))


if __name__ == "__main__":
    search_file()
    save_files()
    data = []
    search_link()
    save_friend()
