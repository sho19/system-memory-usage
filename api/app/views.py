from app import app
import psutil
import cpuinfo
import GPUtil
import nvidia_smi
import logging
from gpuinfo.nvidia import get_gpus



@app.route('/cpu')
def get_current_cpu():
    proc_info = cpuinfo.get_cpu_info()
    cpu_count = psutil.cpu_count(logical=False)
    cpu_stats = psutil.cpu_times()
    user_time = round(cpu_stats[0])    # time spent in user space
    system_time = round(cpu_stats[2])  # time spent in kernel space
    idle_time = round(cpu_stats[3])    # time spent idly
    percent = psutil.cpu_percent(interval=0.1)
    return {'cpuUtilization': {'procInfo':proc_info,'cpuCount':cpu_count,'userTime':user_time,'systemTime':system_time,'idleTime':idle_time,'percent':percent}}


@app.route('/memory')
def get_current_memory():
    multiplier = 1024.0 ** 3
    virtualMemory = psutil.virtual_memory() 
    total = round((virtualMemory.total / (multiplier)),2)
    percent = virtualMemory.percent
    used = round((virtualMemory.used / (multiplier)),2)
    free = round((virtualMemory.free / (multiplier)),2)
    return {'memoryUtilzation': {'total':str(total)+' GB','percent':percent,'used':str(used)+' GB','free':str(free)+' GB'}}
 


