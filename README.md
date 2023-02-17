# Planets-Project

A node script that narrows down habitable planets based off of 4 key metrics needed to sustain life on a planet. Data is pulled from [NASA's Kepler database archive](https://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=cumulative)

## Things I learned from this project

- What is a stream?
  - A stream is a sequence of data that is being transfered from one location to another in chunks.
- What is a buffer?
  - A buffer is a chunk of data from the sequence of data in a stream.
- How to use Node's File System API
  - In the project I used `createReadStream`, which takes in a file path and outputs a readable stream. A readable stream is a stream that outputs sequential buffers of data to be read. I also used the `pipe` function, which passes a stream to a writeable stream. A writable stream is a stream that allows us to write data.
- Practiced with a third-pary API and read through its documentation.
  - I used `csv-parse` for this project. `csv-parse` parses a stream and outputs the properly encoded data. For this project, I "piped" the readable stream returned from nodes `fs` api and passed it to `csv-parse`'s `parse` function. `parse` allowed me to encode the stream and pass in options that allowed for easier parsing of the stream of bytes and transform it to key-value objects.
