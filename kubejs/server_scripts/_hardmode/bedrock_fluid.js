/*
This file intentionally left blank as part of renaming or moving another file.

This is done because pack update mechanisms naively assume files won't be deleted, renamed, or moved;
They only alter files that are added or modified.

As a result, if this file were not made blank then a player would update their pack to have both this old file
AND the new file both exist at once with identical contents.

This causes errors in KJS or other difficult-to-troubleshoot issues, 
so we first update this old file to something nonfunctional as you see here
and THEN delete it in the next patch after.
*/