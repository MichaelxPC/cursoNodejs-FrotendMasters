import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { newNote, getAllNotes, findNotes, removeNote } from './note.js';
import { LogNotes } from './utils.js';

yargs(hideBin(process.argv))
.command('new <note>', 'create a new note', yargs => {
  return yargs.positional('note', {
    describe: 'The content of the note you want to create',
    type: 'string'
  })
}, async (argv) => {
    const tags = argv.tags ? argv.tags.split(',') : []
    const note = await newNote(argv.note, tags)
    console.log('¡Your new note has been created!' + '\n', note);
})
.option('tags', {
  alias: 't',
  type: 'string',
  description: 'tags to add to the note'
})
.command('all', 'get all notes', () => {}, async (argv) => {
  const allNotes = await getAllNotes()
  LogNotes(allNotes)
})
.command('find <filter>', 'get matching notes', yargs => {
  return yargs.positional('filter', {
    describe: 'The search term to filter notes by, will be applied to note.content',
    type: 'string'
  })
}, async (argv) => {
    const match = await findNotes(argv.filter)
    LogNotes(match)
})
.command('remove <id>', 'remove a note by id', yargs => {
  return yargs.positional('id', {
    type: 'number',
    description: 'The id of the note you want to remove'
  })
}, async (argv) => {
    const isDeleted = removeNote(argv.id)
    if (isDeleted) {
        console.log('The note been deleted');
    } else {
        console.log('note not found');
    }
})
.command('web [port]', 'launch website to see notes', yargs => {
  return yargs
    .positional('port', {
      describe: 'port to bind on',
      default: 5000,
      type: 'number'
    })
}, async (argv) => {
  
})
.command('clean', 'remove all notes', () => {}, async (argv) => {
  
})
.demandCommand(1)
.parse()