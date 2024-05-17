import React, { useState, useCallback } from 'react';
import ReactFlow, { addEdge, useNodesState, useEdgesState, Controls, Background, MiniMap, useReactFlow,
} from 'react-flow-renderer';
import TextNode from './components/TextNode';
import NodesPanel from './components/NodesPanel';
import SettingsPanel from './components/SettingsPanel';
import SaveButton from './components/SaveButton';

const nodeTypes = {textNode: TextNode};

const FlowBuilder = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [selectedNode, setSelectedNode] = useState(null)
  const myReactFlow = useReactFlow()

  const onConnect = useCallback(
    (params) => {
      const { target,  targetHandle } = params
      const updatedEdges = edges.filter((el) => el.target !== target || el.targetHandle !== targetHandle)
      setEdges((el) => addEdge(params, updatedEdges))
    },
    [edges, setEdges]
  )
  

  const handleClick = useCallback((event, node) => {
    setSelectedNode(node)
  }, [])

  const handleChange = useCallback(
    (label) => {
      setNodes((nds) =>
        nds.map((node) =>
          node.id === selectedNode.id ? { ...node, data: { ...node.data, label } } : node
        )
      )
      setSelectedNode((node) => ({ ...node, data: { ...node.data, label } }))
    },
    [selectedNode]
  )

  const handleSave = () => {
    const hasError =
      nodes.filter((node) => !edges.some((edge) => edge.target === node.id)).length > 1
    if (hasError) {
      alert('Cannot save Flow')
    } else {
      alert('Flow saved!')
    }
  }

  const onDrop = useCallback(
    (event) => {
      event.preventDefault()

      const reactFlowBounds = myReactFlow.project({
        x: event.clientX - event.target.getBoundingClientRect().left,
        y: event.clientY - event.target.getBoundingClientRect().top,
      })

      const type = event.dataTransfer.getData('application/reactflow')
      if (typeof type === 'undefined' || !type) {
        return
      }

      const newNode = {
        id: `${+new Date()}`,
        type,
        position: reactFlowBounds,
        data: { label: `${type} node` },
      }

      setNodes((nds) => nds.concat(newNode))
    },
    [myReactFlow, setNodes]
  )

  const onDragOver = useCallback((event) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }, [])

  console.log('selectedNode:', selectedNode)
  return (
    <div className="flow-builder">
      {selectedNode ?
        <SettingsPanel selectedNode={selectedNode} setSelectedNode={setSelectedNode} onChange={handleChange} />
      :
        <NodesPanel />
      }
      <SaveButton onSave={handleSave} />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={handleClick}
        nodeTypes={nodeTypes}
        onDrop={onDrop}
        onDragOver={onDragOver}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  )
}

export default FlowBuilder;
