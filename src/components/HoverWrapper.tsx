const hoverWrapper = (sentence: string) => {
    return sentence.split(/(\s+|(?=\W))/).map((part, idx) => {
        if (part.trim() === '') {
            return part;
        }
        return (
            <span key={idx} className="hover:text-mono transition duration-200">
                {part}
            </span>
        )
    })
}

export default hoverWrapper