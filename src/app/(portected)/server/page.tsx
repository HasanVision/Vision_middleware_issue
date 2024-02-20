

import {auth} from "@/auth";

import {currentUser} from "@/src/lib/auth"
import { UserInfo} from "@/src/app/components/user-info/user-info"

const ServerPage = async () =>{
    const user = await currentUser();

    return(
        <UserInfo label="Server Component" user={user}/>
    )
}

export default ServerPage;