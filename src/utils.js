
export const LogNotes = notes => {
    notes.forEach(({id, content, tags}) => {
        console.log('Content: ', content);
        console.log('Tags: ', tags);
        console.log('ID: ', id);
        console.log('\n');
    });
}