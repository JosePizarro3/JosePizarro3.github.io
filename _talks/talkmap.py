# # Leaflet cluster map of talk locations
#
# (c) 2016-2017 R. Stuart Geiger, released under the MIT license
#
# Run this from the _talks/ directory, which contains .md files of all your talks.
# This scrapes the location YAML field from each .md file, geolocates it with
# geopy/Nominatim, and uses the getorg library to output data, HTML,
# and Javascript for a standalone cluster map.
#

import glob
import getorg
from geopy import Nominatim
import os
import re


filepath = os.path.dirname(__file__)
files = glob.glob(f"{filepath}/*.md")

geocoder = Nominatim(user_agent="talks-map")
location_dict = {}
location = ""
permalink = ""
title = ""


for file in files:
    with open(file, "r") as f:
        content = f.read()
        match = re.search(r"location: *(.+)", content)
        if match:
            location = match.group(1).replace('"', "")
        location_dict[location] = geocoder.geocode(location)
        print(location, "\n", location_dict[location])


m = getorg.orgmap.create_map_obj()
getorg.orgmap.output_html_cluster_map(
    location_dict,
    folder_name=f"{os.path.dirname(filepath)}/talkmap",
    hashed_usernames=False,
)
