import React from 'react';

const ByeAndSellButtons = ({ title }) => {
    return (
        <div className="dropdown">
            <button class="btn btn-custom dropdown-toggle"
                type="button"
                id="dropdownMenu1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true">
                {title}
                <span class="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a style={{ fontSize: 20 }} className='list-group-item list-group-item-success' href="https://www.dextools.io/app/bsc/pair-explorer/0xc6f58586f93b41c322411396a12276c7884741e7">
                    Биржа Dextools
                </a></li>
                <li><a style={{ fontSize: 20 }} className='list-group-item list-group-item-success' href="https://poocoin.app/tokens/0x9695bd68560b872b1d0003f86483dfc8dc13cd0f">
                    Биржа Poocoin
                </a></li>
            </ul>
        </div>
    );
};

export default ByeAndSellButtons;