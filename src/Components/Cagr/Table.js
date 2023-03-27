export default function Table({ heading, content }) {

    function addRow(value) {
        return (
            <tr>{value.map(addData)}</tr>
        );
    }

    function addHeading(value) {
        return (
            <th className=" border-2 border-[#C4C4C4] text-center">{value}</th>
        );
    }

    function addData(value) {
        return (
            <td className=" border-2 border-[#C4C4C4] text-center">{value}</td>
        );
    }

    return (
        <table className=" border-2 border-[#C4C4C4] ">
            <thead>
                <tr>
                    {heading.map(addHeading)}
                </tr>
            </thead>

            <tbody>
                {content.map(addRow)}
            </tbody>
        </table>
    );
}