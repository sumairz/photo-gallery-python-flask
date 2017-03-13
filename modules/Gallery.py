import os
from definition import *

class Gallery:

    def __init__(self):
        pass

    '''
    * Read folder names inside photo folder
    * @param
    *   NONE
    *
    * @return
    *   $final (ARRAY)
    '''
    def get_all_gallery(self):
        galleries = [name for name in os.listdir(Gallery_Folder)]
        return galleries

    '''
    * Create folder using the name argument
    * @param
    *   $name (string)
    *
    * @return
    *   Boolean
    '''
    def add_gallery(self,gallery_name):
        if os.path.isdir(Gallery_Folder+gallery_name) is False:
            if os.mkdir(Gallery_Folder+gallery_name):
                return True
        else:
            return False


    '''
    * Delete folder using the name argument
    * @param
    *   $name (string)
    *
    * @return
    *   Boolean
    '''
    def delete_gallery(self, gallery_name):
        if os.path.isdir(Gallery_Folder+gallery_name) is True:
            if os.removedirs(Gallery_Folder+gallery_name):
                return True
            else:
                return False
        else:
            return False

    '''
    * rename a gallery folder name
    * @param
    *   $currentName (string)
    *   $newName (string)
    *
    * @return
    *   Boolean
    '''
    def edit_gallery_name(self,oldName,newName):
        if os.path.isdir(Gallery_Folder+oldName) is True:
            if os.rename(Gallery_Folder+oldName, Gallery_Folder+newName):
                return True
        else:
            return False

