import { Copy, DollarSign, ExternalLink, Trash } from "lucide-react";
import React from "react";

const MainSection = () => {
  return (
    <>
      <main>
       
        <ul className="box-info">
          <li>
            <DollarSign className="w-12 h-12" />
            <span className="text">
              <h3>1020</h3>
              <p>Mon Balance</p>
            </span>
          </li>
          <li>
            <DollarSign className="w-12 h-12" />
            <span className="text">
              <h3>2834</h3>
              <p>Total NFT's Minted</p>
            </span>
          </li>
          <li>
            <DollarSign className="w-12 h-12" />
            <span className="text">
              <h3>1230</h3>
              <p>Total Tokens HOLD</p>
            </span>
          </li>
        </ul>

        <div className="table-data">
          <div className="order">
            <div className="head">
              <h3>Previous Searches</h3>
            </div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <p>0xabdaddadadacd...891</p>
                  </td>
                  <td>
                    <Copy />
                  </td>
                  <td>
                    <span>
                      <ExternalLink />
                    </span>
                  </td>
                  <td>
                    <span>
                      <Trash />
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="todo">
            <div className="head">
              <h3>Features</h3>
            </div>
            <ul className="todo-list">
              <li className="completed">
                <p>Check Tokens</p>
                
              </li>
              <li className="completed">
                <p>Check NFTS</p>
                
              </li>
             
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainSection;
