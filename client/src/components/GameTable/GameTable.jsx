import '../GameTable/GameTable_style.css'
import { Link } from "react-router-dom";


function GameTable() {



  return (
    <>
      <div className='container'>
        <table>
          <tr>
            <th>Т Е М Ы</th>
            <br></br>
            <th>В О П Р О С Ы</th>
          </tr>
          <tr>
            <td>Эльбрус</td>
            <td> <Link to='/game/:id'>100</Link></td>
            <td> <Link to='/game/:id'>200</Link></td>
            <td> <Link to='/game/:id'>500</Link></td>
          </tr>
          <tr>
            <td>Тупые</td>
            <td> <Link to='/game/:id'>100</Link></td>
            <td> <Link to='/game/:id'>200</Link></td>
            <td> <Link to='/game/:id'>500</Link></td>
          </tr>
          <tr>
            <td>Айтишечка</td>
            <td> <Link to='/game/:id'>100</Link></td>
            <td> <Link to='/game/:id'>200</Link></td>
            <td> <Link to='/game/:id'>500</Link></td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default GameTable;
