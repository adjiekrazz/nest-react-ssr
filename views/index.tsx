interface IndexPageProps {
    user: any;
}

const IndexPage = ({ user }: IndexPageProps) => {
    return <p>Halo {user.name}!</p>;
}

export default IndexPage