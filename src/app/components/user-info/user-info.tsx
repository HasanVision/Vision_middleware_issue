import {ExtendedUser} from "@/next-auth";





interface UserInfoProps {
    user?: ExtendedUser;
    label: string;
};

export const UserInfo =({
    user,
    label,} : UserInfoProps) => {
    return (
        <div>
            <p>
                💻{label}
            </p>
        </div>
    )

}