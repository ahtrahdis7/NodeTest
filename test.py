import base64
from PIL import Image
from io import BytesIO
import io
import requests
import time
import numpy as np
import json
from requests import Request, Session
import os
url='https://xeta.tech/ocr'
with open("ss3.png", "rb") as image_file:
    im_bytes = base64.b64encode(image_file.read())
#with open("try.jfif"", "rb") as f:
    #im_b64 = base64.b64encode(f.read())
#image1 = Image.open(io.BytesIO(base64.b64decode(data["photo"])))
#base64.b64encode(im_bytes)
obj={"photo":im_bytes}
image1 = Image.open(io.BytesIO(base64.b64decode(obj["photo"])))
print(image1)
image1 = np.array(image1)
print(image1.shape)
obj={"photo":im_bytes.decode('utf8')}
lat=[]
for i in range(2):
    start=time.time()
    x = requests.post(url, data = json.dumps(obj),verify=False)
#'/mnt/e/yision/repos/certs/xeta_tech.crt')
#,'/mnt/e/yision/repos/certs/private.pem'])
#'/mnt/e/yision/repos/certs/xeta_tech.crt') #,headers=headers)
    end=time.time()
    final=end-start
    lat.append(final)
    print(final)
    print(x)
    print(x.text)
print(sum(lat)/len(lat))