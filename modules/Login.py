from definition import *
import json

class Login:

    # Constructor
    def __init__(self):
        pass

    '''
    * Handle the login feature
    * @param username(string)
    * @param password(string)
    *
    * @return Boolean
    '''
    def login(self,username,password):
        data = {}
        logincreds = self.getcredentials()

        for key in logincreds:
            if logincreds[key]['user'] == username and logincreds[key]['password'] == password:
                data['type'] = logincreds[key]['type']
                data['result'] = True

                return data
        return False

    '''
    * Handle the logout feature by destroying session
    * @param NONE
    *
    * @return Boolean
    '''
    def logout(self):
        pass

    '''
    * Read Credentials JSON file to get saved username and password
    * @param NONE
    *
    * @return Array
    '''
    def getcredentials(self):
        data = json.loads(open(CREDENTIALS_FILE).read())
        return data['credentials']
