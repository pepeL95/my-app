import './Portfolio.scss'
import { IconButton } from '@mui/material'
import ElectricalServicesRoundedIcon from '@mui/icons-material/ElectricalServicesRounded'
const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1>Here are some personal projects...</h1>
      <div className="top-row">
        <a
          href="https://github.com/pepeL95/SemesterPlanning.git"
          target="_blank"
          rel="noopener noreferrer"
          className="cards"
        >
          <h3>SemesterPlanning</h3>
          <p>
            This application allows students to input their previously taken
            courses, and returns a set of available courses (according to
            prerequisites that were already checked). It will display an optimal
            list by priorityzing a given criteria specified by the user (i.e
            gradution time).
          </p>
          <div className="external-link">
            <ElectricalServicesRoundedIcon />
          </div>
        </a>

        <a
          href="https://github.com/pepeL95/Dijkstra-s-Algorithm.git"
          target="_blank"
          rel="noopener noreferrer"
          className="cards"
        >
          <h3>Dijkstra-s-Algorithm</h3>
          <p>
            Given any graph G, this C++ application returns the shortest path
            between two nodes, n1 and n2, using Dijkstra's algorithm.
          </p>
          <div className="external-link">
            <ElectricalServicesRoundedIcon />
          </div>
        </a>
      </div>

      <div className="bottom-row">
        <a
          href="https://github.com/pepeL95/reader_writer_locks.git"
          target="_blank"
          rel="noopener noreferrer"
          className="cards"
        >
          <h3>Reader-Writter-Locks</h3>
          <p>
            This is a C++ application developed for an Operating Systems class.
            This program uses parallel programming and knowledge of data
            structures to create reader/writer locks that do not starve writers.
          </p>
          <div className="external-link">
            <ElectricalServicesRoundedIcon />
          </div>
        </a>

        <a className="cards">
          <h3>Python OCR Application</h3>
          <p>
            Personal project that required an OCR system and data processing.
            (Not in GitHub). I used PyTesseract for the OCR implementation.
          </p>
        </a>
      </div>
    </div>
  )
}

export default Portfolio
