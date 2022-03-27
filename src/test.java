import java.util.Stack;

public class test{

    static class Node{
        int data;
        Node left;
        Node right;
        Node(int data, Node left, Node right){
            this.data =data;
            this.left = left;
            this.right = right;
        }
    }
    static class pair{
        Node node;
        int state;
        pair(Node node, int s){
            this.node = node;
            this.state = s;
        }
    }
    static void iterativeTraversal(Node root){
        Stack<pair> stack = new Stack<>();
        pair p = new pair(root, 0);
        stack.push(p);
        String pre = "";
        String ino = "";
        String post = "";

        while(stack.size()>0){
            pair peek = stack.peek();

            if(peek.state==0){
                if(peek.node.left!=null){
                    pair np = new pair(peek.node.left, 0);
                    stack.push(np);
                }
                pre += peek.node.data+" - ";
                peek.state++;

            }else if(peek.state==1){
                if(peek.node.right!= null){
                    pair np = new pair(peek.node.right, 0);
                    stack.push(np);
                }
                ino += peek.node.data+" - ";
                peek.state++;

            }else if(peek.state==2){
                post+= peek.node.data+" - ";
                stack.pop();
            }
        }
        System.out.println(pre);
        System.out.println(ino);
        System.out.println(post);
    }
    public static void main(String[] args) {
        
        Node l = new Node(5, null, null);
        Node r = new Node(15, null, null);
        Node root = new Node(10, l, r);
        pair p = new pair(root, 0);
        
        iterativeTraversal(root);
    }
}