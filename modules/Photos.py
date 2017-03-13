import os
from definition import *


class Photos:

    def __init__(self):
        pass

    '''
    * Read photos names inside photo folder
    * @param gallery_name (String)
    *
    * @return
    *   $final (ARRAY)
    '''
    def get_all_gallery_photos(self, gallery_name):
        photos = [name for name in os.listdir(Gallery_Folder+gallery_name) if(name.split(".")[0] != "Thumbs")]
        return photos

    '''
    * Delete image using the name argument
    * @param gallery_name (string)
    * @param photo_name (string)
    *
    * @return
    *   Boolean
    '''
    def delete_gallery_photos(self, gallery_name, photo_name):
        if os.path.exists(Gallery_Folder + gallery_name+"/"+photo_name) is True:
            if os.remove(Gallery_Folder+gallery_name+"/"+photo_name):
                return True
            else:
                return False
        else:
            return False

