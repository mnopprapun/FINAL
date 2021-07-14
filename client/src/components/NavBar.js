import React from "react";
import { Link } from "react-router-dom";
import "/Users/mathawudnopprapun/Development/phase5/graphicsCard-app/client/src/components/navbar.css";
import { useHistory } from "react-router-dom";

function NavBar({ user, setUser }) {
  const history = useHistory();

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" })
    .then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
    history.push("/")
  }

  return (
    <nav>
      <img
        className="logo"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAAAaGhqpqan6+vo2Njbb29ucnJzLy8u3t7fU1NT29vbs7OywsLDk5OTy8vKCgoIMDAzFxcVAQEBGRkY7OzsmJiZ1dXUtLS3f39+/v78hISGTk5PQ0NBkZGR7e3uIiIhNTU1sbGyOjo4UFBRZWVmioqKXl5dMTExoaGhWVlbNfcNaAAAJMElEQVR4nO2daXuqPBCGjWKLyKK4b3Wtnvb//8A3k5BAFsAeeHsi1zxfrEBCbrNNZgLt9VAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqF+Tf063ebevy5jM5FaDZHQcSEhErovJERC94WESOi+kBAJ3VdgatAtQosOnSf0kfDlhYSvLyR8fSHh6wsJX1/dJ+yyXZpOTlSXDhM+iEWdInxHwpcXEr6+qgmT++BFFG3jvyJ8s511Vct90nFCqnvnCclH5wnJn84TkmPnCYnfecJ55wnJW+cJ3ztPeO484bLzhAQJCRI6LyQkSOi8kJC4Q7j7Xp0e9+i+P13Ot+eTvQjh9DgKx4WCjuPB6smkL0F4DHo2+Zf6pK9AuB5Y8XhVPna16V0nvEXV/ujxvS4Hxwkn9f728Ks6C6cJl28Gj01+ZSYuE349GzAJzxW5OEy410HGgZ8O9u9RGhjoFVOHemF1DPh3CbUhNLjPCydnD60Bn0rzUa+LUypfq8l/QzhSS2bee61GXqyVA9KrG1S2F+M3CY2oyqdxiRZAm5TkZCMs20/zi4RXo1CpcY0eIiyxcNwk/DQL5a31i4wg6NKal5OE09zIDnenrL8ZHY0TxjnoxpqZk4R5OGXTp4YbH1Vj/SqOthjmI47VgnOR8EuWJJjyEhzgyx/tshAO0llimNf4zJKbi4ShKEhebV+0orbqVVOouxH8tZOIgSU3BwkfsiDDwtFIf4DpNpY9L49mW6zwtgiP922wvV/PxUPGHpDdFT6uxXSzCE4UUYjsV6qdcg7VGa/v9TwxekYiiWWwaYVwmA8NSV6MrZHxjM8CxYmLDRfKXCenQq1V0jlE+bYsWgGyYX/8L4SRkjoQy+6RkfGcR/O8PCn7nkyLuckqVCrW1LpYxzKGdjCua07Y1xdxyayckIdkZZ3xGLRSN7Kso2pA2r6L34QnxzQMmhOKBhJuxHVhkdDLBYRDdlAsdjbwRSlp3iBqqpCoDkU52Fz16xoT8i6Y8IzfeRPb5oR7/foJHB3zlszaqDaTi5Hf6IU1issK2ZTwxM4EoifdDvnvyAjNNTX7SVg75W10rpyVjXRuJKzWJEs31q3TpoShXg1vvbjYD01CPj9DO40tlXzK7hX+EJAsRSn1ZVZDQj60F42lhexWJYTkAse9rI3qVoiYd+rGGVNirNGN04aELNuSLlNGyAeTdMbynGrnNtm9nnJnKxKmkL6QbEjIjpuzLBMjtDoXWNNmg5LuQeqL2XBljPp1umQpdbOmGSGrh6TEs84IB8uhUH5GDidG7c9kIbwk9O+n7+cJv0XKVgnZOsdYuBUJCyr8ENlGpVBvo/r+HiCNnouk5a65VglPKuEjzRTVEGbDgllD31oaMdHW6VhwvGm/SDPClUooDfC4jpAPKKYfV9vV65X6CNVUiuGo9eBmhKxR5VPX04RZkxobPfiipBj0n+FbHNT7PEH4vL/0xo5L90JqEhpWG+ir5E6qky19im+Y9jRpydST29WRShv9q2YLZpbIprSeLRbDk0JobWYsQ5ZU72X5SLMxXcAW9dWVG5M2fKknfxy3YDdIlENfCqFtxme/etRn2WorCLGl1yuPQyi6zT/220D172uXqIQ/jj3x+ctYqVUSTrJf5cSqSj23FksLu3e3TP358S5aq27RNiTMXBV5Y5uyYa2KkGcHbZBNGdqrYsQi6Kk2qkgsLvR4aVPC7OQoGxWzeamK8E3W+trC8lZVkkqJOtRt9qaEfEqkHSe9Hq8Dsd6vIGQGcmbMXM1WJWJONs9ntcS9j20TFtybucoJ+VAiRmtzaSInkh/semKS1tCidULZAbjCRyVhrDQknnXRtJmKm9XuItEk7AvDSm6BkMwKD6b400sVIZtdxvl31k4Vx4MwUDzyI+1EASL9TBuEdKKO+Ci//eQdk/WtrVkVK6WNgpiBWux08kklZUasnR7lzG8Mwu0QgtZ6B/hLyeZeOPZR99I1WYXmUq49wrYkDfbcwFp4GqFhD8gqNBdb7hEOZWmkQzHWDEMSaa1WLkksvdc9wjyiI9qpbzS+z15QXCPtvAoABwlzXw236MDlobuXEmVdJhfAY2LKQcKCywXKw1qgbuLAJbEYk/MVlG7PgFwkzANsdLRZjm2E3DRKmeGT+xKspp6ThAV/1JX7rAxnwJsscMHcsIarnCTUH4u0EApTMSxsAbdvUHSTkGjOJUtod9zTVRLqcJRwqm3pMgkNB03ZTmFHCflumVyWMUQDLC2cq4RkHSol81eqpfZnojbT8hWzs4Rkp+2AGMeD68di2V98TK4jFd+2N1PKXULbhpwyDSpycZmQnJ7j80oCmFxOE5K5/YEnVWl1MNVtQrrkr3vmIqmsQOI+ISFX69uQMsU2W1uV+4TUQitpq95Tj+e9AiEhi/1Bb62Jf3puM8NrEILmp8iPQ6/nhZt0MHne7fU6hH8rJCQdI3Tp2bW2pBLG/oFKC4q8NmG/Z5ELz661poWN8F8/UdKqjHfSdY7QugTrFKHVcu8SoeGX7Brh0r746hDhxgrYIUL9zZddI1yW1GBXCKcVb33RCNeCcLNcUM34wnN18APY9xAd/ANs+fL9A/j0zoF/gBD0lR6e8dPgyxzSw2AMfgV+AE9B3mlqHikaLlimfNfYgx7us8xYqgVNBYH5Y36vdEnILuX3opkdjvxeLLOUJuNw58+JX+XgCYbzoj7ktfz5LL5jBTYGQbAH/Lbgjs7qGPY0wd0hqAfbuGMeW59lPxyEjOAJRegg/DmUmOWavS8A9qbteGYQzoXXAMPd7tm9NvzZNPjJ37LMYDUUZZmBF5xlY7XUfiAe44H3clxUQvCsf2iEG17WcsLMe80JtxmhxzetCsL3/NccU0IImgYWwkQSNnyLfISESIiEL0dYPZZaCXvqWCoIs7EUjE0bYT6WtkJ4SsIEZjaffgJhGCYwhX3Sr3DXAf08089DGMJ+pgX9CmPwkX7CFDainwuTMEpC9pRJGIawR2g+DhOYRff0avg1fZoZEMb8Xit6GKbLO00FmW1oshYJyXQ6zT5snyWH9VQa4c8zs51ui7AlKYQtqfuETf9vzIj0W9OtnxGe2sx03pAQhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgU6i/1H8/1v0KuXEujAAAAAElFTkSuQmCC"
        alt='logo'
      ></img><li className= "title">Safe Zone Graphics</li>
      <ul className="nav-links">
        
        <Link className="a" to="/shop">
          <li>Shop</li>
        </Link>
        <Link className="a" to="/about">
          <li>About</li>
        </Link>
        <Link className="a" to="/login">
          <li></li>
        </Link>
        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
         
            <Link onClick={handleLogoutClick} tabindex="-1" href="#">
              Logout
            </Link>
          
        </ul>
      </ul>
    </nav>
  );
}

export default NavBar;
