
"use client"
import styles from "./settings.module.css"

import {Button, Link} from "@radix-ui/themes"
import {usePathname} from "next/navigation";
import {UserButton} from "@/src/app/components/auth/user-button";

//import {Button} from "@radix-ui/themes"
export  const Navbar =  () => {

    const pathname= usePathname();
    return(
       <nav className={styles.Navbar}>
           <div>
<Button asChild variant={pathname ==="/settings" ? "classic" : "outline"}  >
<Link href="/settings">
Settings
</Link>
</Button>
               <Button asChild variant={pathname ==="/server" ? "classic" : "outline"}  >
                   <Link href="/server">
                       Server
                   </Link>
               </Button>
               <Button asChild variant={pathname ==="/client" ? "classic" : "outline"}  >
                   <Link href="/client">
                       Client
                   </Link>

               </Button>

               <Button asChild variant={pathname ==="/admin" ? "classic" : "outline"}  >
                   <Link href="/admin">
                       Admin
                   </Link>
               </Button>
           </div>
           <UserButton/>
       </nav>
    )
}

