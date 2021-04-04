import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Input Format</h2>
<p>First line contain <strong><em class="timesnewromans">N.N</em></strong> lines follow, each having a PAN nummer.</p>
<h2>Constrains</h2>
<ul>
  <li>1 ≤ N ≤ 10</li>
  <li>Each char is an uppercase letter, i.e., <strong class="timesnewromans"><em >char</em></strong> ∈ [<strong class="timesnewromans"><em >′A′,′Z′</em></strong>]. </li>
  <li>Each digit lies between 0 and 9, i.e., <strong class="timesnewromans"><em >digit</em></strong> ∈ [<strong class="timesnewromans">0,9</strong>].</li>
  <li>The length of the PAN number is always 10, i.e., <strong class="timesnewromans"><em>length</em>(<em>PAN</em>)</strong>=<strong>10</strong></li>
  <li>Every character in PAN is either char or digit satisfying the above constraints.</li>
</ul>
<h2>Output Format</h2>
<p>For every PAN number listed, print YES if it is valid and NO if it isn't.</p>
    </div>

  );
}

export default App;
