interface PropsTypes {
    title: string;
    paragrap: string;
}
export function Modal(props: PropsTypes){
    return (
        <div>
            <h1>{props.title}</h1>
            <p>A {props.paragrap} tem melões grandes,</p>
        </div>
    )
}