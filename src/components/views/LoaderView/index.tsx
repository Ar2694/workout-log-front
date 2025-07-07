import ProgressContainer from "components/containers/ProgressContainer"

interface Props {
    bool: boolean | null | undefined,
    children: React.ReactNode
}

export default function LoaderView({ bool, children }: Props) {
    return bool ? children : <ProgressContainer />;
}
