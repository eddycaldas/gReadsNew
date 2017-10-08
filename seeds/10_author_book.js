exports.seed = function(knex, Promise) {
  return knex('author_book').del()
    .then(function () {
      return knex('author_book').insert([
        {
          author_id: knex('author').where('first_name', 'Alex').select('id'),
          book_id: knex('book').where('title', 'Python In A Nutshell').select('id')
        },
        {
          author_id: knex('author').where('first_name', 'Anna').select('id'),
          book_id: knex('book').where('title', 'Python In A Nutshell').select('id')
        },
        {
          author_id: knex('author').where('first_name', 'Steve').select('id'),
          book_id: knex('book').where('title', 'Python In A Nutshell').select('id')
        },
        {
          author_id: knex('author').where('first_name', 'Allen B.').select('id'),
          book_id: knex('book').where('title', 'Think Python').select('id')
        },
        {
          author_id: knex('author').where('first_name', 'Bonnie').select('id'),
          book_id: knex('book').where('title', 'Learning React Native').select('id')
        },
        {
          author_id: knex('author').where('first_name', 'Kyle').select('id'),
          book_id: knex('book').where('title', "You Don't Know JS: ES6 & Beyond").select('id')
        },
        {
          author_id: knex('author').where('first_name', 'Kyle').select('id'),
          book_id: knex('book').where('title', "You Don't Know JS: Scope & Closures").select('id')
        },
        {
          author_id: knex('author').where('first_name', 'Kyle').select('id'),
          book_id: knex('book').where('title', "You Don't Know JS: Async & Performance").select('id')
        }
      ]);
    });
};
