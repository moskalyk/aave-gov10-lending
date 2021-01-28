import { IERC20, IERC721, ILendingPool, IProtocolDataProvider, IStableDebtToken } from './Interfaces.sol';
import {ERC721} from '@openzeppelin/contracts/token/ERC721/ERC721.sol';

import './OracleClient.sol';

contract NFTFactory is ERC721, OracleClient {

	struct Land {
		uint id;
		uint price;
		bytes agreement;
		uint x;
		uint y;
	}

	struct Bio {
		uint id;
		uint redeemablePrice;
		// string type;
	}

	mapping(uint => Land) public land;

	constructor() ERC721("Gov10", "GOV10") public {
		// console.log(super.getPrice())
    }

    // function 
    function issue(bytes memory data) public {
    	// bio NFT to delegator, and land to 
    	uint tokenId = super.totalSupply() + 1;

		super._safeMint(msg.sender, tokenId, data);

		// TODO: create struct
    }

	function redeem(address redeemer) public {
		// TODO: transfer Bio NFT to land owner

	}
}