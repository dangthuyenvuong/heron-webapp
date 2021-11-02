import { Button, SuccessIcon, Title } from "components/atoms"
import { AuthForm } from "components/organisms"

interface SuccessfullTemplateProp extends React.HTMLAttributes<HTMLDivElement> {
}

export const SuccessfullTemplate: React.FC<SuccessfullTemplateProp> = ({ ...ref }) => {
    return (
        <AuthForm>
            <div className="flex-col items-center">
                <SuccessIcon />
                <Title>Successfull!</Title>
                <p className="description text-center">Congratulations,You have signed up successfully. Wish you have a nice experience.</p>
                <Button className="w-full">Continue your journey</Button>
            </div>
        </AuthForm>
    )
}