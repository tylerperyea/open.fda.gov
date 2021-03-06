import React from "react"

import QueryExplorer from '../../../../../components/QueryExplorer'
import explorers from '../_explorers.yaml'

class IndexRoute extends React.Component {
  render() {

    const oneReport = explorers['oneReport']
    const pharmacologic = explorers['pharmacologic']
    const reaction = explorers['reaction']

    return (
      <section className="doc-content">
        <h2>Example drug labeling API queries</h2>
        <p>To help get you started, we have provided some API query examples below. Use the Run query button to call the API and get back results. You can experiment by editing the example queries in the black text box.</p>
        <QueryExplorer
          desc={oneReport.description}
          originalQuery={oneReport.query}
          params={oneReport.params}
          title={oneReport.title}
        />
        <QueryExplorer
          desc={pharmacologic.description}
          originalQuery={pharmacologic.query}
          params={pharmacologic.params}
          title={pharmacologic.title}
        />
        <QueryExplorer
          desc={reaction.description}
          originalQuery={reaction.query}
          params={reaction.params}
          title={reaction.title}
        />
      </section>
    )
  }
}

export default IndexRoute
